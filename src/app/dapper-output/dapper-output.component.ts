import { Component, Input, OnChanges } from '@angular/core';
import { Entity } from '../entity';

@Component({
  selector: 'app-dapper-output',
  templateUrl: './dapper-output.component.html',
  styleUrls: [ './dapper-output.component.css' ]
})
export class DapperOutputComponent implements OnChanges {
  @Input() entity: Entity | null = null;
  output: string = '';

  ngOnChanges() {
    this.generateOutput();
  }

  generateOutput(): void {
    if (!this.entity) {
      this.output = 'Please provide an entity.';
      return;
    }

    const modelClassName = this.entity.name;
    const propertyDeclarations = this.entity.properties
      .map((prop) => `public ${prop.type} ${prop.name} { get; set; }`)
      .join('\n    ');

    this.output = `
using System;
using Dapper;

public class ${modelClassName}
{
    ${propertyDeclarations}
}
`;
  }
}
