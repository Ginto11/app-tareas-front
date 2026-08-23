import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Tarea } from '../../../../interfaces/tarea-interface';
import { TareaStore } from '../../../../store/tarea.store';
import Swal from 'sweetalert2';
import { CategoriaStore } from '../../../../store/categoria.store';

@Component({
  selector: 'app-nueva-tarea',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './nueva-tarea.html',
  styles: ``,
})
export default class NuevaTarea implements OnInit {

  public form!: FormGroup;
  private router = inject(Router);
  private formBuilder = inject(FormBuilder);
  private tareaStore = inject(TareaStore);
  public categoriaStore = inject(CategoriaStore);

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      titulo: ['', Validators.required],
      categoria: ['', Validators.required],
      descripcion: [''],
      prioridad: ['', Validators.required],
      fecha: ['', Validators.required],
      etiquetas: ['', Validators.required]
    })

    console.log(this.tareaStore.tareas().length)
  }

  get titulo(){
    return this.form.get('titulo') as FormControl
  } 

  get categoria(){
    return this.form.get('categoria') as FormControl
  }

  get prioridad(){
    return this.form.get('prioridad') as FormControl
  }

  get fecha(){
    return this.form.get('fecha') as FormControl
  }

  get etiquetas(){
    return this.form.get('etiquetas') as FormControl
  }


  onSubmit():void{
    
    const [year, month, day] = this.form.value['fecha'].split('-').map(Number);

    const fechaDate = new Date(year, month - 1, day);

    const tarea: Tarea = {
      id: crypto.randomUUID(),
      titulo: this.form.value['titulo'],
      fecha: fechaDate,
      prioridad: this.form.value['prioridad'],
      etiqueta: this.form.value['etiquetas'],
      descripcion: this.form.value['descripcion'],
      categoria: this.form.value['categoria'],
      estado: 'Pendiente',
      usuario: {
        iniciales: 'NM',
        nombre: 'Nelson'
      },
      fechaCreacion: new Date(),
      fechaFinalizacion: new Date()
    }

    this.tareaStore.agregarTarea(tarea);
    Swal.fire({
      icon: 'success',
      text: 'Tarea registrada exitosamente.',
      showConfirmButton: true
    }).then(result => {
      if(result.isConfirmed){
        this.router.navigate(['/dashboard/inicio'])
      }
    })
  }

}
