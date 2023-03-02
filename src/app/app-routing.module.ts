import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './modules/chat/chat.component';

const routes: Routes = [
  { path: '', redirectTo: 'chat', pathMatch: 'full' },
  {
    path: '',
    component: ChatComponent,
    children: [
      {
        path: 'chat',
        loadChildren: () =>
          import('src/app/modules/chat/chat.module').then(m => m.ChatModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
