import {Component, OnInit, Input} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {
  ValidatorTypes,
  IAddress,
  IPerson,
  IVendor,
  IPayment,
  usaStates,
  Countries,
  PaymentMethod,
  PaymentType,
  CurrencyType,
  CardType,
  IMatStepperConfiguration,
  MatStepperNames,
  EntityTypes,
  FormFieldType,
  PersonFormControlNames,
  TextField,
  Patterns,
  FormControlNames,
  IMatStep,
  IMatFormField,
  IItem,
  Severity,
  transactionsCategories,
  IFormArrayItemData
} from '../../models';

import * as _moment from 'moment';
import {FormService} from '../../services';
import {ICategoryProperties} from '../../models/objects/transactionsCategories';
// tslint:disable-next-line:no-duplicate-imports
// import {default as _rollupMoment} from 'moment';
// import * as _rollupMoment from "moment";

const moment = _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

const configurations: IMatStepperConfiguration = {
  [MatStepperNames.addTransactionStepper]: [
    {
      title: 'Contact details',
      searchEntities: {
        entityType: EntityTypes.person,
      },
      fields: [
        {
          formControlName: FormControlNames.autoComplete,
          getControl: (validators) => {
            return new FormControl('', Validators.compose(validators || []));
          },
          input: {
            type: FormFieldType.text,
            placeholder: 'Search contacts...'
          },
          autoComplete: {
            filteredEntities: null,
            onOptionSelected: (selectedObject: IPerson): Object => {
              return {
                [PersonFormControlNames.firstname]: selectedObject.name.first,
                [PersonFormControlNames.lastname]: selectedObject.name.last,
                [FormControlNames.nickname]: selectedObject.autoComplete.displayText,
                [FormControlNames.phone]: selectedObject.phone,
                [FormControlNames.email]: selectedObject.emails
              };
            }
          }
        },
        {
          formControlName: PersonFormControlNames.firstname,
          getControl: (validators) => {
            return new FormControl('', Validators.compose(validators || []));
          },
          input: {
            type: FormFieldType.text,
            placeholder: 'First name',
            validators: {
              [ValidatorTypes.required]: {value: true, errorMessage: 'First name is required'},
              [ValidatorTypes.minLength]: {
                value: TextField.minLength,
                errorMessage: `First name must be at least ${TextField.minLength} characters long`
              },
              [ValidatorTypes.maxLength]: {
                value: TextField.maxLength,
                errorMessage: `First name cannot be more than ${TextField.maxLength} characters long`
              },
              [ValidatorTypes.pattern]: {value: Patterns.onlyLetters, errorMessage: 'First name must contain only letters'}
            }
          }
        },
        {
          formControlName: PersonFormControlNames.lastname,
          getControl: (validators) => {
            return new FormControl('', Validators.compose(validators || []));
          },
          input: {
            type: FormFieldType.text,
            placeholder: 'Last name',
            validators: {
              [ValidatorTypes.required]: {value: true, errorMessage: 'Last name is required'},
              [ValidatorTypes.minLength]: {
                value: TextField.minLength,
                errorMessage: `Last name must be at least ${TextField.minLength} characters long`
              },
              [ValidatorTypes.maxLength]: {
                value: TextField.maxLength,
                errorMessage: `Last name cannot be more than ${TextField.maxLength} characters long`
              },
              [ValidatorTypes.pattern]: {value: Patterns.onlyLetters, errorMessage: 'Last name must contain only letters'}
            }
          }
        },
        {
          formControlName: FormControlNames.nickname,
          getControl: (validators) => {
            return new FormControl('', Validators.compose(validators || []));
          },
          input: {
            type: FormFieldType.text,
            placeholder: 'Nickname',
            validators: {
              [ValidatorTypes.minLength]: {
                value: TextField.minLength,
                errorMessage: `Nickname must be at least ${TextField.minLength} characters long`
              },
              [ValidatorTypes.maxLength]: {
                value: TextField.maxLength,
                errorMessage: `Nickname cannot be more than ${TextField.maxLength} characters long`
              },
              [ValidatorTypes.pattern]: {value: Patterns.onlyLettersWithSpaces, errorMessage: 'Nickname must contain only letters'}
            }
          }
        },
        {
          formControlName: FormControlNames.email,
          getControl: (validators) => {
            return new FormControl('', Validators.compose(validators || []));
          },
          input: {
            type: FormFieldType.email,
            placeholder: 'Email',
            validators: {
              [ValidatorTypes.required]: {value: true, errorMessage: 'Email is required'},
              [ValidatorTypes.email]: {value: true, errorMessage: 'Email is invalid'}
            }
          }
        },
        {
          formControlName: FormControlNames.phone,
          getControl: (validators) => {
            return new FormControl('', Validators.compose(validators || []));
          },
          input: {
            type: FormFieldType.text,
            placeholder: 'Phone number',
            validators: {
              [ValidatorTypes.required]: {value: true, errorMessage: 'Phone number is required'},
              [ValidatorTypes.minLength]: {value: 10, errorMessage: 'Phone number must be at least 10 characters long'},
              [ValidatorTypes.maxLength]: {value: 10, errorMessage: 'Phone number cannot be more than 10 characters long'},
              [ValidatorTypes.pattern]: {value: Patterns.onlyDigits, errorMessage: 'Phone number must contain only digits'}
            }
          }
        }
      ]
    },
    {
      title: 'Contact\'s address',
      searchEntities: {
        entityType: EntityTypes.address,
      },
      fields: [
        {
          formControlName: FormControlNames.autoComplete,
          getControl: (validators) => {
            return new FormControl('', Validators.compose(validators || []));
          },
          input: {
            type: FormFieldType.text,
            placeholder: 'Search contacts addresses...'
          },
          autoComplete: {
            filteredEntities: null,
            onOptionSelected: (selectedObject: IAddress): Object => {
              return {
                [FormControlNames.country]: selectedObject.country,
                [FormControlNames.state]: selectedObject.state.abbreviation,
                [FormControlNames.street]: selectedObject.street,
                [FormControlNames.city]: selectedObject.city,
                [FormControlNames.zip]: selectedObject.zip
              };
            }
          }
        },
        {
          formControlName: FormControlNames.country,
          getControl: (validators) => {
            return new FormControl('', Validators.compose(validators || []));
          },
          select: {
            placeholder: 'Country',
            displayWith: (object, option): string => {
              return object[option];
            },
            options: {
              object: Countries,
              arr: Object.keys(Countries)
            },
            validators: {
              [ValidatorTypes.required]: {value: true, errorMessage: 'Country is required'},
            }
          }
        },
        {
          formControlName: FormControlNames.state,
          getControl: (validators) => {
            return new FormControl('', Validators.compose(validators || []));
          },
          select: {
            placeholder: 'State',
            displayWith: (object, option): string => {
              return option + ' - ' + object[option].name;
            },
            options: {
              object: usaStates,
              arr: Object.keys(usaStates)
            },
            validators: {
              [ValidatorTypes.required]: {value: true, errorMessage: 'State is required'},
            }
          }
        },
        {
          formControlName: FormControlNames.city,
          getControl: (validators) => {
            return new FormControl('', Validators.compose(validators || []));
          },
          input: {
            type: FormFieldType.text,
            placeholder: 'City',
            validators: {
              [ValidatorTypes.required]: {value: true, errorMessage: 'City is required'},
              [ValidatorTypes.minLength]: {value: 2, errorMessage: 'City must be at least 2 characters long'},
              [ValidatorTypes.maxLength]: {value: 50, errorMessage: 'City cannot be more than 50 characters long'},
              [ValidatorTypes.pattern]: {value: Patterns.onlyLettersWithSpaces, errorMessage: 'City must contain only letters'}
            }
          }
        },
        {
          formControlName: FormControlNames.street,
          getControl: (validators) => {
            return new FormControl('', Validators.compose(validators || []));
          },
          input: {
            type: FormFieldType.text,
            placeholder: 'Street',
            validators: {
              [ValidatorTypes.required]: {value: true, errorMessage: 'Street is required'},
              [ValidatorTypes.minLength]: {value: 5, errorMessage: 'Street must be at least 5 characters long'},
              [ValidatorTypes.maxLength]: {value: 50, errorMessage: 'Street cannot be more than 50 characters long'}
            }
          }
        },
        {
          formControlName: FormControlNames.zip,
          getControl: (validators) => {
            return new FormControl('', Validators.compose(validators || []));
          },
          input: {
            type: FormFieldType.text,
            placeholder: 'Zip',
            validators: {
              [ValidatorTypes.required]: {value: true, errorMessage: 'Street is required'},
              [ValidatorTypes.minLength]: {value: 5, errorMessage: 'Zip must be at least 5 characters long'},
              [ValidatorTypes.maxLength]: {value: 5, errorMessage: 'Zip cannot be more than 5 characters long'},
              [ValidatorTypes.pattern]: {value: Patterns.onlyDigits, errorMessage: 'Zip number must contain only digits'}
            }
          }
        }
      ]
    },
    {
      title: 'Vendor details',
      searchEntities: {
        entityType: EntityTypes.vendor,
      },
      fields: [
        {
          formControlName: FormControlNames.autoComplete,
          getControl: (validators) => {
            return new FormControl('', Validators.compose(validators || []));
          },
          input: {
            type: FormFieldType.text,
            placeholder: 'Search vendors...'
          },
          autoComplete: {
            filteredEntities: null,
            onOptionSelected: (selectedObject: IVendor): Object => {
              return {
                [FormControlNames.name]: selectedObject.name,
                [FormControlNames.nickname]: selectedObject.autoComplete.displayText,
                [FormControlNames.phone]: selectedObject.phone,
                [FormControlNames.email]: selectedObject.emails
              };
            }
          }
        },
        {
          formControlName: FormControlNames.name,
          getControl: (validators) => {
            return new FormControl('', Validators.compose(validators || []));
          },
          input: {
            type: FormFieldType.text,
            placeholder: 'Name',
            validators: {
              [ValidatorTypes.required]: {value: true, errorMessage: 'Vendor name is required'},
              [ValidatorTypes.minLength]: {value: 1, errorMessage: 'Vendor name must be at least 1 characters long'},
              [ValidatorTypes.maxLength]: {value: 50, errorMessage: 'Vendor name cannot be more than 50 characters long'}
            }
          }
        },
        {
          formControlName: FormControlNames.nickname,
          getControl: (validators) => {
            return new FormControl('', Validators.compose(validators || []));
          },
          input: {
            type: FormFieldType.text,
            placeholder: 'Nickname',
            validators: {
              [ValidatorTypes.minLength]: {value: TextField.minLength, errorMessage: 'Nickname must be at least 2 characters long'},
              [ValidatorTypes.maxLength]: {value: TextField.maxLength, errorMessage: 'Nickname cannot be more than 15 characters long'},
              [ValidatorTypes.pattern]: {value: Patterns.onlyLettersWithSpaces, errorMessage: 'Nickname must contain only letters'}
            }
          }
        },
        {
          formControlName: FormControlNames.email,
          getControl: (validators) => {
            return new FormControl('', Validators.compose(validators || []));
          },
          input: {
            type: FormFieldType.email,
            placeholder: 'Email',
            validators: {
              [ValidatorTypes.email]: {value: true, errorMessage: 'Email is invalid'}
            }
          }
        },
        {
          formControlName: FormControlNames.phone,
          getControl: (validators) => {
            return new FormControl('', Validators.compose(validators || []));
          },
          input: {
            type: FormFieldType.text,
            placeholder: 'Phone number',
            validators: {
              [ValidatorTypes.required]: {value: true, errorMessage: 'Phone number is required'},
              [ValidatorTypes.minLength]: {value: 10, errorMessage: 'Phone number must be at least 10 characters long'},
              [ValidatorTypes.maxLength]: {value: 10, errorMessage: 'Phone number cannot be more than 10 characters long'},
              [ValidatorTypes.pattern]: {value: Patterns.onlyDigits, errorMessage: 'Phone number must contain only digits'}
            }
          }
        }
      ]
    },
    {
      title: 'Vendor\'s address',
      searchEntities: {
        entityType: EntityTypes.address,
      },
      fields: [
        {
          formControlName: FormControlNames.autoComplete,
          getControl: (validators) => {
            return new FormControl('', Validators.compose(validators || []));
          },
          input: {
            type: FormFieldType.text,
            placeholder: 'Search vendors addresses...'
          },
          autoComplete: {
            filteredEntities: null,
            onOptionSelected: (selectedObject: IAddress): Object => {
              return {
                [FormControlNames.country]: selectedObject.country,
                [FormControlNames.state]: selectedObject.state.abbreviation,
                [FormControlNames.street]: selectedObject.street,
                [FormControlNames.city]: selectedObject.city,
                [FormControlNames.zip]: selectedObject.zip
              };
            }
          }
        },
        {
          formControlName: FormControlNames.country,
          getControl: (validators) => {
            return new FormControl('', Validators.compose(validators || []));
          },
          select: {
            placeholder: 'Country',
            displayWith: (object, option): string => {
              return object[option];
            },
            options: {
              object: Countries,
              arr: Object.keys(Countries)
            },
            validators: {
              [ValidatorTypes.required]: {value: true, errorMessage: 'Country is required'},
            }
          }
        },
        {
          formControlName: FormControlNames.state,
          getControl: (validators) => {
            return new FormControl('', Validators.compose(validators || []));
          },
          select: {
            placeholder: 'State',
            displayWith: (object, option): string => {
              return option + ' - ' + object[option].name;
            },
            options: {
              object: usaStates,
              arr: Object.keys(usaStates)
            },
            validators: {
              [ValidatorTypes.required]: {value: true, errorMessage: 'State is required'},
            }
          }
        },
        {
          formControlName: FormControlNames.city,
          getControl: (validators) => {
            return new FormControl('', Validators.compose(validators || []));
          },
          input: {
            type: FormFieldType.text,
            placeholder: 'City',
            validators: {
              [ValidatorTypes.required]: {value: true, errorMessage: 'City is required'},
              [ValidatorTypes.minLength]: {value: TextField.minLength, errorMessage: 'City must be at least 2 characters long'},
              [ValidatorTypes.maxLength]: {value: TextField.maxLength, errorMessage: 'City cannot be more than 50 characters long'},
              [ValidatorTypes.pattern]: {value: Patterns.onlyLettersWithSpaces, errorMessage: 'City must contain only letters'}
            }
          }
        },
        {
          formControlName: FormControlNames.street,
          getControl: (validators) => {
            return new FormControl('', Validators.compose(validators || []));
          },
          input: {
            type: FormFieldType.text,
            placeholder: 'Street',
            validators: {
              [ValidatorTypes.required]: {value: true, errorMessage: 'Street is required'},
              [ValidatorTypes.minLength]: {value: 5, errorMessage: 'Street must be at least 5 characters long'},
              [ValidatorTypes.maxLength]: {value: 50, errorMessage: 'Street cannot be more than 50 characters long'}
            }
          }
        },
        {
          formControlName: FormControlNames.zip,
          getControl: (validators) => {
            return new FormControl('', Validators.compose(validators || []));
          },
          input: {
            type: FormFieldType.text,
            placeholder: 'Zip',
            validators: {
              [ValidatorTypes.required]: {value: true, errorMessage: 'Street is required'},
              [ValidatorTypes.minLength]: {value: 5, errorMessage: 'Zip must be at least 5 characters long'},
              [ValidatorTypes.maxLength]: {value: 5, errorMessage: 'Zip cannot be more than 50 characters long'},
              [ValidatorTypes.pattern]: {value: Patterns.onlyDigits, errorMessage: 'Zip number must contain only digits'}
            }
          }
        }
      ]
    },
    {
      title: 'Payment details',
      searchEntities: {
        entityType: EntityTypes.payment,
        populateObject: {
          model: EntityTypes.card,
          path: 'card'
        }
      },
      fields: [
        {
          formControlName: FormControlNames.autoComplete,
          getControl: (validators) => {
            return new FormControl('', Validators.compose(validators || []));
          },
          input: {
            type: FormFieldType.text,
            placeholder: 'Search payment...'
          },
          autoComplete: {
            filteredEntities: null,
            onOptionSelected: (selectedObject: IPayment): Object => {
              return {
                [FormControlNames.method]: selectedObject.method,
                [FormControlNames.paymentType]: Object.keys(PaymentType)[Object.values(PaymentType).indexOf(selectedObject.type)],
                [FormControlNames.currency]: Object.keys(CurrencyType)[Object.values(CurrencyType).indexOf(selectedObject.currency)],
                [FormControlNames.cardType]: Object.keys(CardType)[Object.values(CardType).indexOf(selectedObject.card.type)],
                [FormControlNames.last4Digits]: selectedObject.card.last4Digits
              };
            }
          }
        },
        {
          formControlName: FormControlNames.method,
          getControl: (validators) => {
            return new FormControl('', Validators.compose(validators || []));
          },
          select: {
            onSelectOptionChange: (value: string, formGroup: FormGroup) => {
              if (value === PaymentMethod.Card) {
                return;
              }
              formGroup.controls[FormControlNames.last4Digits].disable();
              formGroup.controls[FormControlNames.cardType].disable();
            },
            placeholder: 'Payment method',
            displayWith: (object, option): string => {
              return object[option];
            },
            options: {
              object: PaymentMethod,
              arr: Object.keys(PaymentMethod)
            },
            validators: {
              [ValidatorTypes.required]: {value: true, errorMessage: 'Payment method is required'},
            }
          }
        },
        {
          formControlName: FormControlNames.paymentType,
          getControl: (validators) => {
            return new FormControl('', Validators.compose(validators || []));
          },
          select: {
            placeholder: 'Payment type',
            displayWith: (object, option): string => {
              return object[option];
            },
            options: {
              object: PaymentType,
              arr: Object.keys(PaymentType)
            },
            validators: {
              [ValidatorTypes.required]: {value: true, errorMessage: 'Payment type is required'},
            }
          }
        },
        {
          formControlName: FormControlNames.currency,
          getControl: (validators) => {
            return new FormControl('', Validators.compose(validators || []));
          },
          select: {
            placeholder: 'Currency',
            displayWith: (object, option): string => {
              return object[option];
            },
            options: {
              object: CurrencyType,
              arr: Object.keys(CurrencyType)
            },
            validators: {
              [ValidatorTypes.required]: {value: true, errorMessage: 'Currency type is required'},
            }
          }
        },
        {
          formControlName: FormControlNames.cardType,
          getControl: (validators) => {
            return new FormControl('', Validators.compose(validators || []));
          },
          select: {
            placeholder: 'Card type',
            displayWith: (object, option): string => {
              return object[option];
            },
            options: {
              object: CardType,
              arr: Object.keys(CardType)
            },
            validators: {
              [ValidatorTypes.required]: {value: true, errorMessage: 'Card type is required'},
            }
          }
        },
        {
          formControlName: FormControlNames.last4Digits,
          getControl: (validators) => {
            return new FormControl('', Validators.compose(validators || []));
          },
          input: {
            type: FormFieldType.text,
            placeholder: 'Last 4 digits',
            validators: {
              [ValidatorTypes.required]: {value: true, errorMessage: 'Card last 4 digits are required'},
              [ValidatorTypes.minLength]: {value: 4, errorMessage: 'Card last 4 digits must be at least 4 characters long'},
              [ValidatorTypes.maxLength]: {value: 4, errorMessage: 'Card last 4 digits cannot be more than 4 characters long'},
              [ValidatorTypes.pattern]: {value: Patterns.onlyDigits, errorMessage: 'Amount must contain only digits'}
            }
          }
        }
      ]
    },
    {
      title: 'Transaction details',
      searchEntities: {
        entityType: EntityTypes.transaction
      },
      fields: [
        {
          formControlName: FormControlNames.date,
          getControl: (validators) => {
            return new FormControl(moment());
          },
          input: {
            type: FormFieldType.text,
            placeholder: 'Transaction date',
            validators: {
              [ValidatorTypes.required]: {value: true, errorMessage: 'Transaction date is required'}
            }
          },
          datePicker: {
            templateName: 'dp'
          }
        },
        {
          formControlName: FormControlNames.subTotal,
          getControl: (validators) => {
            return new FormControl('0', Validators.compose(validators || []));
          },
          input: {
            type: FormFieldType.text,
            readonly: true,
            placeholder: 'Sub total'
          }
        },
        {
          formControlName: FormControlNames.tax,
          getControl: (validators) => {
            return new FormControl('0', Validators.compose(validators || []));
          },
          input: {
            type: FormFieldType.text,
            placeholder: 'Tax',
            defaultValue: 0,
            validators: {
              [ValidatorTypes.pattern]: {value: Patterns.numberWithDecimal, errorMessage: 'Only digits allowed'}
            },
            onFocus: function (currVal) {
              if (!this.hasDefaultValue()) {
                return;
              }
              if (!this.isDefaultValue(currVal)) {
                return;
              }
              this.group.controls[this.field.formControlName].setValue('');
            },
            onBlur: function (currVal) {
              if (!this.hasDefaultValue()) {
                return;
              }
              if (!this.isDefaultValue(currVal) && currVal !== '') {
                return;
              }
              this.group.controls[this.field.formControlName].setValue(this.input.defaultValue);
            }
          }
        },
        {
          formControlName: FormControlNames.tip,
          getControl: (validators) => {
            return new FormControl('0', Validators.compose(validators || []));
          },
          input: {
            type: FormFieldType.text,
            placeholder: 'Tip',
            defaultValue: 0,
            validators: {
              [ValidatorTypes.pattern]: {value: Patterns.numberWithDecimal, errorMessage: 'Only digits allowed'}
            },
            onFocus: function (currVal) {
              if (!this.hasDefaultValue()) {
                return;
              }
              if (!this.isDefaultValue(currVal)) {
                return;
              }
              this.group.controls[this.field.formControlName].setValue('');
            },
            onBlur: function (currVal) {
              if (!this.hasDefaultValue()) {
                return;
              }
              if (!this.isDefaultValue(currVal) && currVal !== '') {
                return;
              }
              this.group.controls[this.field.formControlName].setValue(this.input.defaultValue);
            }
          }
        },
        {
          formControlName: FormControlNames.total,
          getControl: (validators) => {
            return new FormControl('0', Validators.compose(validators || []));
          },
          input: {
            type: FormFieldType.text,
            readonly: true,
            placeholder: 'Total'
          }
        },
        <IMatStep>{
          type: FormFieldType.array,
          title: 'Item',
          searchEntities: {
            entityType: EntityTypes.item
          },
          formsCollapsed: [],
          collapsedTitle: (group: FormGroup) => `${group.controls[FormControlNames.name].value} (${group.controls[FormControlNames.amount].value}) - ${group.controls[FormControlNames.price].value}$`,
          fields: [
            {
              formControlName: FormControlNames.autoComplete,
              getControl: (validators) => {
                return new FormControl('', Validators.compose(validators || []));
              },
              input: {
                type: FormFieldType.text,
                placeholder: 'Search items...'
              },
              autoComplete: {
                filteredEntities: null,
                onOptionSelected: (selectedObject: IItem): Object => {
                  return {
                    [FormControlNames.name]: selectedObject.name,
                    [FormControlNames.price]: selectedObject.price,
                    [FormControlNames.amount]: selectedObject.amount,
                    [FormControlNames.isRefund]: selectedObject.isRefund,
                    [FormControlNames.onWatchList]: selectedObject.onWatchList,
                    [FormControlNames.severity]: selectedObject.severity,
                    [FormControlNames.categories]: selectedObject.categories
                  };
                }
              }
            },
            {
              formControlName: FormControlNames.price,
              getControl: (validators) => {
                return new FormControl('', Validators.compose(validators || []));
              },
              input: {
                type: FormFieldType.text,
                placeholder: 'Item price',
                validators: {
                  [ValidatorTypes.required]: {value: true, errorMessage: 'Item price is required'},
                  [ValidatorTypes.pattern]: {value: Patterns.numberWithDecimal, errorMessage: 'Only digits allowed'}
                }
              }
            },
            {
              formControlName: FormControlNames.name,
              getControl: (validators) => {
                return new FormControl('', Validators.compose(validators || []));
              },
              input: {
                type: FormFieldType.text,
                placeholder: 'Item name',
                validators: {
                  [ValidatorTypes.required]: {value: true, errorMessage: 'Item name is required'},
                  [ValidatorTypes.pattern]: {
                    value: Patterns.numbersLettersBaiscSigns,
                    errorMessage: 'Only letters, numbers, commas, dashes, brackets'
                  },
                  [ValidatorTypes.minLength]: {value: 2, errorMessage: 'Minimum 2 characters allowed'},
                  [ValidatorTypes.maxLength]: {value: 50, errorMessage: 'Maximum 50 characters allowed'}
                }
              }
            },
            {
              formControlName: FormControlNames.amount,
              getControl: (validators) => {
                return new FormControl('1', Validators.compose(validators || []));
              },
              input: {
                type: FormFieldType.number,
                placeholder: 'Amount',
                defaultValue: '1',
                min: 1,
                max: 5,
                onBlur: function (currVal) {
                  if (currVal !== '') {
                    return;
                  }
                  this.group.controls[this.field.formControlName].setValue(this.input.defaultValue);
                }
              }
            },
            {
              formControlName: FormControlNames.isRefund,
              getControl: (validators) => {
                return new FormControl(false, Validators.compose(validators || []));
              },
              slideToggle: {
                label: 'Refund',
                defaultValue: false
              }
            },
            {
              formControlName: FormControlNames.onWatchList,
              getControl: (validators) => {
                return new FormControl(false, Validators.compose(validators || []));
              },
              slideToggle: {
                label: 'Add to watch list',
                defaultValue: false
              }
            },
            {
              formControlName: FormControlNames.severity,
              getControl: (validators) => {
                return new FormControl(Severity.Low, Validators.compose(validators || []));
              },
              buttonToggle: {
                label: FormControlNames.severity,
                toggleGroupName: FormControlNames.severity,
                options: {
                  arr: Object.keys(Severity)
                },
                defaultValue: Severity.Low,
                disableRipple: true
              }
            },
            {
              formControlName: FormControlNames.categories,
              getControl: (validators) => {
                return new FormControl('', Validators.compose(validators || []));
              },
              select: {
                placeholder: 'Categories',
                multiple: true,
                displayWith: (object: ICategoryProperties, option: string): string => {
                  return object[option].title;
                },
                options: {
                  object: transactionsCategories,
                  arr: Object.keys(transactionsCategories)
                },
                validators: {
                  [ValidatorTypes.required]: {value: true, errorMessage: 'Select at least 1 category'},
                }
              }
            }
          ]
        }
      ]
    }
  ]
};

@Component({
  selector: 'app-mat-stepper',
  templateUrl: './mat-stepper.component.html',
  styleUrls: ['./mat-stepper.component.scss'],
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})

export class MatStepperComponent implements OnInit {

  @Input() stepperName;
  formGroups = [];
  configurations: IMatStepperConfiguration = configurations;
  matStepperNames = MatStepperNames;
  formControlNames = FormControlNames;

  constructor(protected formService: FormService) {
  }

  ngOnInit() {
    this.generateForms(this.configurations[this.stepperName]);
  }

  generateForms(steps: IMatStep[]): void {
    steps.forEach((step: IMatStep, i: number, theStepsArr: IMatStep[]) => {
      const thisStep = theStepsArr[i];
      thisStep.formGroupNames = [`${this.stepperName}-${i}-${this.formService.generateGuid()}`];
      thisStep.formGroups = {};
      thisStep.formGroups[thisStep.formGroupNames[0]] = new FormGroup(this.formService.getControls(step, thisStep.formGroupNames[0]));
      this.autoCompleteHandler(thisStep, thisStep.formGroups[thisStep.formGroupNames[0]]);
    });
  }

  autoCompleteHandler(step: IMatStep, formGroup: FormGroup): void {
    step.fields.forEach((field: IMatFormField, i: number) => {
      if (!field.autoComplete) {
        return;
      }
      (<IMatFormField>step.fields[i]).autoComplete.filteredEntities = [this.formService.valueChangeEvent(step.formGroups[step.formGroupNames[i]], step)];
    });
  }

}
