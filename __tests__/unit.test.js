// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
// test isPhoneNumber
test('716-271-8821 should be a phone number', () => {
  expect(isPhoneNumber('716-271-8821')).toBe(true);
});

test('(216)-292-8221 should be a phone number', () => {
  expect(isPhoneNumber('(216)-292-8221')).toBe(true);
});

test('71-271-8821 should not be a phone number', () => {
  expect(isPhoneNumber('-8821')).toBe(false);
});

test('72-7272-wtf should not be a phone number', () => {
  expect(isPhoneNumber('7272-')).toBe(false);
});

// test isEmail
test('you@gmail.com should be an email', () => {
  expect(isEmail('you@gmail.com')).toBe(true);
})

test('who@ucsd.edu should be an email', () => {
  expect(isEmail('who@ucsd.edu')).toBe(true);
})

test('you@.com should not be an email', () => {
  expect(isEmail('you@.com')).toBe(false);
})

test('why@gmail should not be an email', () => {
  expect(isEmail('why@gmail')).toBe(false);
})

// test isStrongPassword
test('strong_password should be a strong password', () => {
  expect(isStrongPassword('strong_password')).toBe(true);
})

test('super_secure should be a strong password', () => {
  expect(isStrongPassword('super_secure')).toBe(true);
})

test('pa should not be a strong password', () => {
  expect(isStrongPassword('pa')).toBe(false);
})

test('123456 should not be a strong password', () => {
  expect(isStrongPassword('123456')).toBe(false);
})

// test isDate
test('1/1/2027 should be a date', () => {
  expect(isDate('1/1/2027')).toBe(true);
})

test('12/31/2027 should be a date', () => {
  expect(isDate('12/31/2027')).toBe(true);
})

test('322/31/2027 should not be a date', () => {
  expect(isDate('322/31/2027')).toBe(false);
})

test('12/31/203 should not be a date', () => {
  expect(isDate('12/31/203')).toBe(false);
})

// test isHexColor
test('#BBB should be a hex color', () => {
  expect(isHexColor('#BBB')).toBe(true);
})

test('#BBBCCC should be a hex color', () => {
  expect(isHexColor('#BBBCCC')).toBe(true);
})

test('#FFFF should not be a hex color', () => {
  expect(isHexColor('#FFFF')).toBe(false);
})

test('#GGG should not be a hex color', () => {
  expect(isHexColor('#GGG')).toBe(false);
})