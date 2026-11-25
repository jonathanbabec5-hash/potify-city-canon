import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const registry=JSON.parse(readFileSync('public/POTIFY_CITY_REGISTRY_PUBLIC.json'));
test('public registry contains 469 distinct entries',()=>{
  const items=registry.sections.flatMap(section=>section.entries);
  assert.equal(items.length,469);assert.equal(new Set(items.map(item=>item.id ?? item.ID)).size,469);
});
