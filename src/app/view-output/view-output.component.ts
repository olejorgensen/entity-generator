import { Component, Input, OnChanges } from '@angular/core';
import { Entity } from '../entity';

@Component({
  selector: 'app-view-output',
  templateUrl: './view-output.component.html',
  styleUrls: ['./view-output.component.css']
})
export class ViewOutputComponent {
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

    const className = `${this.entity.name}View`;
    const viewModelClassName = `${this.entity.name}ViewModel`;
    const modelClassName = this.entity.name;

    const propertyBindings = this.entity.properties
      .map((prop) => `<TextBlock Text="{Binding ${prop.name}}" />`)
      .join('\n        ');

    this.output = `
<UserControl x:Class="${className}"
             xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
             xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
             xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
             xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
             mc:Ignorable="d"
             d:DesignHeight="300" d:DesignWidth="400">
    <UserControl.DataContext>
        <${viewModelClassName} />
    </UserControl.DataContext>
    <Grid>
        ${propertyBindings}
    </Grid>
</UserControl>
`;
  }
}
