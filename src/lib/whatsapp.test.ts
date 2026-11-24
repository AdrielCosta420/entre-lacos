import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { buildWhatsAppUrl } from './whatsapp.ts';

describe('buildWhatsAppUrl', () => {
  it('builds a wa.me link from a valid number', () => {
    assert.equal(buildWhatsAppUrl('5585999998888'), 'https://wa.me/5585999998888');
  });

  it('accepts numbers typed with formatting characters', () => {
    assert.equal(buildWhatsAppUrl('+55 (85) 99999-8888'), 'https://wa.me/5585999998888');
  });

  it('encodes the prefilled message, accents included', () => {
    assert.equal(
      buildWhatsAppUrl('5585999998888', 'Olá, vim pelo site!'),
      'https://wa.me/5585999998888?text=Ol%C3%A1%2C%20vim%20pelo%20site!',
    );
  });

  it('rejects numbers without the country code', () => {
    assert.throws(() => buildWhatsAppUrl('85999998888'), /Invalid WhatsApp number/);
  });

  it('rejects numbers with too few digits', () => {
    assert.throws(() => buildWhatsAppUrl('55859999'), /Invalid WhatsApp number/);
  });
});
