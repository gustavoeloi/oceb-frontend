import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { CapelaniasComponent } from './components/capelanias/capelanias.component';
import { AgendamentoComponent } from './components/agendamento/agendamento.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'sobre', component: SobreComponent },
  { path: 'capelanias', component: CapelaniasComponent },
  { path: 'agendamento', component: AgendamentoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
