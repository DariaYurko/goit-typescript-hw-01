/** Pick
 * 
 * У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType. 
 * Ваше завдання – використовувати Pick та generics для вказівки, що поля цих параметрів належать AllType. 
 * Функція compare повинна повертати AllType.
 * 
 * 1:43:00 - https://www.edu.goit.global/uk/learn/19750491/23199026/23199055/extras
 */

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare(top: Pick<AllType, "name" | "color">, bottom: Pick<AllType, 'position' | 'weight'>): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}
