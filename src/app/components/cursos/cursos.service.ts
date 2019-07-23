import {Injectable} from '@angular/core';

@Injectable()
export class CursosService {

    arrCursos: string[] = ['PHP', 'Angular', 'JavaScript', 'Python'];

    constructor() {
        console.log('Constructor CursosService');
    }

    getCursos() {
        return this.arrCursos;
    }

    addCurso(curso: string) {
        this.arrCursos.push(curso);
    }
}
