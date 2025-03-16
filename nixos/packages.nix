{pkgs, ...}: {
  environment = {
    systemPackages = with pkgs; [
      gh
      git
      nixd
      wget
      brave
      neovim
      haruna
      vscodium
      alejandra
      fastfetch
      keepassxc
    ];
  };
}
