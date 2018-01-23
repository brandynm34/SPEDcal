import { Pipe, PipeTransform, Injectable } from '@angular/core';
import * as _ from "lodash";

@Pipe({
  name: 'searchBy'
})
@Injectable()
export class SearchByPipe implements PipeTransform {
  transform(data: Array<any>, props: Array<any>, arg: string) {
    // Pass in 1 or more properties to match,
    // can go at least one depth (e.g. 'user.name')
    if (!data) return;
    if (!arg[0]) return data;

    let argCase = arg[0].toLowerCase();

    const extractDeepProp = (obj: any, property: any) => {
      const keys = property.split('.');
      const key = keys.shift();

      if (!keys[0]) {
        return obj[property];
      } else {
        let objProp = obj[key];
        _.each(keys, (k: string) => {
          if (objProp[k]) {
            objProp = objProp[k];
          } else return undefined;
        });
        return objProp;
      }
    };

    return _.filter(data, i => {
      let match: boolean = false;

      _.each(props, (property: string) => {
        let valueCase = String(extractDeepProp(i, property)).toLowerCase();

        if (valueCase.indexOf(argCase) > -1 && match === false) match = true;
      });
      return match;
    });
  }
}