import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class AnimalService {
  constructor(private http: HttpClient) {}

  getAnimals() {
    return this.http.get("/api/animals", { responseType: "json" });
  }

  addAnimal(newAnimal) {
    return this.http.post(
      "/api/animals",
      { name: newAnimal },
      { responseType: "json" }
    );
  }
}
