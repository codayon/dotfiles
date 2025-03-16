{
  description = "iamdumb";

  inputs.nixpkgs.url = "github:nixos/nixpkgs/nixos-24.11";

  outputs = {
    self,
    nixpkgs,
    ...
  } @ inputs: {
    nixosConfigurations = {
      nixos = nixpkgs.lib.nixosSystem {
        specialArgs = {inherit self inputs;};
        system = "x86_64-linux";
        modules = [
          ./configuration.nix
        ];
      };
    };
  };
}
