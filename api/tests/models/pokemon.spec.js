const {Pokemon, conn} = require('../../src/db.js');
const {expect} = require('chai');

describe('Pokemon model', () => {
	before(() =>
		conn.authenticate().catch((err) => {
			console.error('Unable to connect to the database:', err);
		})
	);
	beforeEach(() => Pokemon.sync({force: true}));
	describe('Validators', () => {
		describe('name', () => {
			it('should throw an error if name is null', async () => {
				try {
					await Pokemon.create({});
				} catch (err) {
					expect(err.message).to.equal(
						'notNull Violation: It requires a valid name'
					);
				}
			});
		});
		describe('attack', () => {
			it('You shouldnt create a Pokemon if the data input is a string where an integer must be', async () => {
				try {
					await Pokemon.create({
						name: 'Metapod',
						attack: 'This is invalid data',
					});
				} catch (err) {}
				const pokemon = await Pokemon.findOne({
					where: {
						name: 'Metapod',
					},
				});
				expect(pokemon).to.equal(null);
			});
		});
		describe('Create a new Pokemon', () => {
			describe('new Pokemon', () => {
				it('should create a new Pokemon correctly', async () => {
					await Pokemon.create({name: 'Charizard', attack: 120});
					const pokemon = await Pokemon.findOne({
						where: {
							name: 'Charizard',
						},
					});
					expect(pokemon.name).to.equal('Charizard');
					expect(pokemon.attack).to.equal(120);
				});
			});
		});
	});
});
