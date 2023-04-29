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
    this.generateOutput();
  }

  generateOutput(): void {
    if (!this.entity) {
      this.output = 'Please provide an entity.';
      return;
    }

    const className = `${this.entity.name}ViewModel`;
    const modelClassName = this.entity.name;
    const propertyDeclarations = this.entity.properties
      .map(
        (prop) => `public ${prop.type} ${prop.name} { get => _model.${prop.name}; set => SetProperty(ref _model.${prop.name}, value); }`
      )
      .join('\n    ');

    this.output = `
using System;
using CommunityToolkit.Mvvm.ComponentModel;
using CommunityToolkit.Mvvm.Input;

public class ${className} : ObservableObject
{
    private ${modelClassName} _model;

    public ${className}(${modelClassName} model)
    {
        _model = model;
    }

    ${propertyDeclarations}

    // Add ICommand properties for your actions using RelayCommand
    // Example:
    // public ICommand SaveCommand => new RelayCommand(Save);
}
`;
  }
}
