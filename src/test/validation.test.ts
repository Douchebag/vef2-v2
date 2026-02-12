import test from 'node:test';
import assert from 'node:assert/strict';
import { TodoItemSchema } from '../lib/validation.js';

test('rejects empty/whitespace title', () => {
    const r = TodoItemSchema.safeParse({ title: '   ' });
    assert.equal(r.success, false);
});

test('accepts a valid title', () => {
    const r = TodoItemSchema.safeParse({ title: 'setja upp postgres' });
    assert.equal(r.success, true);
});