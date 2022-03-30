clean:
	@echo "Cleaning modules..."
	@rm -rf ./node_modules && rm -f ./package-lock.json && rm -rf ./.next

install:
	@echo "Installing node modules..."
	@make clean
	@npm install

build:
	@echo "Building.."
	@make install
	@npm run build