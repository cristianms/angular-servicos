import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CursosService} from './components/cursos/cursos.service';
import {CriarCursoModule} from './components/criar-curso/criar-curso.module';
import {CursoModule} from './components/cursos/curso.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        CriarCursoModule,
        CursoModule
    ],
    providers: [CursosService], //comentado pois está sendo declarado nos modulos individuais (criar-curso e curso)
    bootstrap: [AppComponent]
})
export class AppModule {
}
