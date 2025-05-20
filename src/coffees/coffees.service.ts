import { Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/coffe.entity';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Arabica',
      brand: 'Starbucks',
      flavours: ['chocolate', 'vanilla'],
    },
    {
      id: 2,
      name: 'Robusta',
      brand: 'Nescafe',
      flavours: ['caramel', 'hazelnut'],
    },
    {
      id: 3,
      name: 'Liberica',
      brand: 'Blue Bottle',
      flavours: ['floral', 'citrus'],
    },
    {
      id: 4,
      name: 'Excelsa',
      brand: "Peet's Coffee",
      flavours: ['berry', 'spice'],
    },
    {
      id: 5,
      name: 'Geisha',
      brand: 'Intelligentsia',
      flavours: ['jasmine', 'bergamot'],
    },
    {
      id: 6,
      name: 'Catimor',
      brand: 'Lavazza',
      flavours: ['nutty', 'earthy'],
    },
  ];

  findAll() {
    return this.coffees;
  }

  findOne(id: string) {
    const coffee = this.coffees.find((item) => item.id === +id);

    if (!coffee) {
      throw new NotFoundException(`Coffee nr. #${id} not found`);
    }

    return coffee;
  }

  create(createCoffeeDto: any) {
    this.coffees.push(createCoffeeDto);
  }

  update(id: string, updateCoffeeDto: any) {
    const existingCoffee = this.findOne(id);
    if (existingCoffee) {
      // update the existing entity
    }
  }

  remove(id: string) {
    const coffeeIndex = this.coffees.findIndex((item) => item.id === +id);
    if (coffeeIndex >= 0) {
      this.coffees.splice(coffeeIndex, 1);
    }
  }
}
