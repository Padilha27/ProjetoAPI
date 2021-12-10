module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('fornecedors', [
			{
				nome: 'xablau Souza',
				ingrediente: 'blublubli',
				email: 'ggg@ana.com',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Ana lalala',
				ingrediente: 'nhanhanha',
				email: 'asdasd@ana.com',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'kakskdjsdhj',
				ingrediente: 'wewewe',
				email: 'ana@sdsdsdsdsdsd.com',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Aa',
				ingrediente: 'cxa',
				email: 'ggdddsss@ddsdfsdf.com',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: '123deoliveira4 Souza',
				ingrediente: 'ddddddd',
				email: 'ana@1234.com',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'llkajsdhasd Souza',
				ingrediente: 'sddsdsdsd',
				email: 'gggggggggg@ana.com',
				createdAt: new Date(),
				updatedAt: new Date()
			}
	], {})
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('fornecedors', null, {})
  }
}

