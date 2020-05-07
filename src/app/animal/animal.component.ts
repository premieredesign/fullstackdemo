import { Component, OnInit } from "@angular/core";
import { AnimalService } from "./animal.service";

@Component({
  selector: "app-animal",
  templateUrl: "./animal.component.html",
  styleUrls: ["./animal.component.css"],
})
export class AnimalComponent implements OnInit {
  animals;
  constructor(private animalService: AnimalService) {}

  ngOnInit(): void {}

  getAnimals(): any {
    this.animalService.getAnimals().subscribe((res) => {
      this.animals = res;
      console.log("Animal Data", this.animals);
    });
  }
}
