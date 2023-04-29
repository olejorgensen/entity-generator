import { Component, Input, OnChanges } from '@angular/core';
import { Entity } from '../entity';

@Component({
  selector: 'app-service-output',
  templateUrl: './service-output.component.html',
  styleUrls: ['./service-output.component.css']
})
export class ServiceOutputComponent {
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

    const className = `${this.entity.name}Service`;
    const modelClassName = this.entity.name;
    const propertyDeclarations = this.entity.properties
      .map((prop) => `${prop.type} ${prop.name};`)
      .join('\n');

    this.output = `
using System;
using System.Collections.Generic;
using System.Linq;

public class ${className}
{
    private List<${modelClassName}> _entities = new List<${modelClassName}>();

    public IEnumerable<${modelClassName}> GetAll()
    {
        return _entities;
    }

    public IEnumerable<${modelClassName}> Filter(Func<${modelClassName}, bool> predicate)
    {
        return _entities.Where(predicate);
    }

    public void Add(${modelClassName} entity)
    {
        _entities.Add(entity);
    }

    public void Update(${modelClassName} entity)
    {
        int index = _entities.FindIndex(e => e.Id == entity.Id);
        if (index != -1)
        {
            _entities[index] = entity;
        }
    }

    public void Delete(int id)
    {
        _entities.RemoveAll(e => e.Id == id);
    }
}
`;
  }
}
