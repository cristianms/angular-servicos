import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CriarCursoModule} from './components/criar-curso/criar-curso.module';
import {CursoModule} from './components/cursos/curso.module';
import {LogService} from './services/log.service';
/* import {CursosService} from './services/cursos.service'; */

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        CriarCursoModule,
        CursoModule
    ],
    providers: [LogService],
    /* providers: [CursosService], //comentado pois está sendo declarado nos modulos individuais (criar-curso e curso) */
    bootstrap: [AppComponent]
})
export class AppModule {
}
