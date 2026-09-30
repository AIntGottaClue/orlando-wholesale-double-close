import group1 from './cityGroup1';
import group2 from './cityGroup2';
import group3 from './cityGroup3';
import group4 from './cityGroup4';
export interface Faq {q:string;a:string}
export interface Step {title:string;text:string}
export interface Scenario {title:string;intro:string;items:string[];outro:string}
export interface City { [key:string]:any }
export const brand="Orlando Wholesale Double Close";
export const domain="orlando.wholesaledoubleclose.click";
export const trustBar=["Fees from {{tier1Rate}}","Two linked closing files","Published funding schedule","Orlando Metro"];
export const cities: City[]=[...group1,...group2,...group3,...group4];
