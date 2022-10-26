import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent} from './components/about/about.component';
import { BriefcaseComponent } from './components/briefcase/briefcase.component';
import { ContactComponent } from './components/contact/contact.component';
import { ExperienceComponent } from './components/experience/experience.component';

const routes: Routes = [
  {path:'',component:BriefcaseComponent},
  {path:'portafolio',component:BriefcaseComponent},
  {path:'experiencia',component:ExperienceComponent},
  {path:'sobre-mi',component:AboutComponent},
  {path:'contacto',component:ContactComponent},
  {path:'**',component:BriefcaseComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

  export class AppRoutingModule { }
