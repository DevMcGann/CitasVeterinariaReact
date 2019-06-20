import React, { Component } from "react";
import "./bootstrap.min.css";
import Header from "./components/Header";
import NuevaCita from "./components/NuevaCita";
import ListaCitas from "./components/ListaCitas";


class App extends Component {
  state = {
    citas: []
  };

  //cuando la app carga
  componentDidMount() {
    const citasLocalStorage = localStorage.getItem('citas');
    if (citasLocalStorage) {
      this.setState({
        citas: JSON.parse(citasLocalStorage)
      })
    }
  }

  //cuando eliminamos agregamos o modificamos una cita
  componentDidUpdate() {
    localStorage.setItem('citas', JSON.stringify(this.state.citas));
  }

  //creamos una fx que le asignamos a una prop en el componente, para pasar datos del state del hijo al padre
  crearNuevaCita = datos => {
    //copiar el state actual
    const citas = [...this.state.citas, datos];
    //agregar nuevo state
    this.setState({
      citas: citas

    })
  };

  //eliminar las citas del state
  eliminarCita = id => {
    //copiar el state siempre primero [es un array]
    const citasActuales = [...this.state.citas]

    //usar filter para sacar el elemento id del array
    //const citas se crea con los obj con id != a la que dimos click
    const citas = citasActuales.filter(cita => cita.id !== id)

    //actualizar el state
    this.setState({ citas })
  }

  render() {
    return (
      <div className="container">
        <Header titulo="Administrador Pacientes Veterinaria" />
        <div className="row">
          <div className="col-md-10 mx-auto">
            <NuevaCita
              crearNuevaCita={this.crearNuevaCita} //prop
            />
          </div>
          <div className="mt-5 col-md-10 mx-auto">
            <ListaCitas
              citas={this.state.citas}        //prop citas   
              eliminarCita={this.eliminarCita} //prop eliminarCita
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
