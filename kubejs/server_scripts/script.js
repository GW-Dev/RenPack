// priority: 0
console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.tags('item', e => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	e.add('fabric:tools/axes', 'betternether:cincinnasite_axe')
	e.add('fabric:tools/axes', 'betternether:cincinnasite_axe_diamond')
	e.add('fabric:tools/axes', 'betternether:nether_ruby_axe')
	e.add('fabric:tools/axes', 'betterend:aeternium_axe')
	e.add('fabric:tools/axes', 'betterend:thallasium_axe')
	e.add('fabric:tools/axes', 'betterend:terminite_axe')
	e.add('fabric:tools/axes', 'botania:manasteel_axe')
	e.add('fabric:tools/axes', 'botania:terra_axe')
	e.add('fabric:tools/axes', 'botania:elementium_axe')
  })

  ServerEvents.recipes(e => {
	// Change recipes here

	e.custom({
		"type": "botania:mana_infusion",
		"input": {
		  "item": "farmersdelight:tree_bark",
		  
		},
		"output": {
		  "item": "farmersdelight:tree_bark",
		  "count": 2
		},
		"mana": 1000,
		"catalyst": {
			"type": "block",
			"block": "botania:conjuration_catalyst" }
	  })

	e.remove({output: 'chisel:chisel'}),
	e.shaped('chisel:chisel', [
		'III',
		' I ',
		' S '
	  ], {
		S: 'minecraft:stick',
		I: '#c:iron_ingots'
	})

	
	e.shapeless('2x farmersdelight:raw_pasta', [
		'4x minecraft:wheat',
		Item.of('minecraft:potion', {Potion: "minecraft:water"})
	]).replaceIngredient({item: Item.of('minecraft:potion', {Potion: "minecraft:water"})}, 'minecraft:glass_bottle'),
	
	e.smelting('minecraft:copper_block', 'minecraft:cut_copper')
})	
