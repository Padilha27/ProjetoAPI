module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Clientes', [
			{
				nome: 'Paola Bracho',
				email: 'brachopaola@mex.com',
                telefone: 21978245631,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Maria do Bairro',
				email: 'maridob@mb.com',
                telefone: 21947632873,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Rubi Fernandez',
				email: 'rubifernandez@rb.com',
                telefone: 21987654234,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Carlos Daniel Herrera',
				email: 'carlos@dh.com',
                telefone: 2193647853425,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Vovó Piedade',
				email: 'piedadevovo@vp.com',
                telefone: 21936478359,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Alejandro Colute',
				email: 'colute@ac.com',
                telefone: 21938546782,
				createdAt: new Date(),
				updatedAt: new Date()
			}
	], {})
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Funcionarios', null, {})
  }
}