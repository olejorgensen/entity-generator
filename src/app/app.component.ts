import { Component } from '@angular/core';
import { Entity } from './entity';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'entity-generator';
  entityName = '';
  propertyName = '';
  propertyType = '';
  properties: { name: string; type: string }[] = [];
  entity: Entity | null = null;

  addProperty(): void {
    this.properties.push({ name: this.propertyName, type: this.propertyType });
    this.propertyName = '';
    this.propertyType = '';
  }

  generateEntity(): void {
    this.entity = new Entity(this.entityName, this.properties);
  }
}
