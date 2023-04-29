import { Component, Input, OnChanges } from '@angular/core';
import { Entity } from '../entity';

@Component({
  selector: 'app-view-model-output',
  templateUrl: './view-model-output.component.html',
  styleUrls: ['./view-model-output.component.css']
})
export class ViewModelOutputComponent {
  @Input() entity: Entity | null = null;
  output: string = '';

  ngOnChanges() {
    this.output = this.generateOutput();
  }

  generateOutput(): string {
    if (this.entity == null) return '';
    var result = `CREATE TABLE ${this.entity.name} (\n`;
    result += this.entity.properties
      .map((prop) => `  ${prop.name} ${prop.type}`)
      .join(',\n');
    result += '\n);';
    return result;
  }
}
