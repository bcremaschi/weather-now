import { WeatherNowComponent } from "./pages/weather-now/weather-now.component";
import { MainComponent } from "./pages/main/main.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: MainComponent
  },
  {
    path: "weather",
    component: WeatherNowComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
