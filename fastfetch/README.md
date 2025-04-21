## Fastfetch
## Fastfetch: System Information Tool

**Fastfetch** is a neofetch-like tool designed for fetching system information and displaying it in a visually appealing and highly configurable manner, with a strong focus on performance and speed. It can quickly gather details about your operating system, kernel, CPU, GPU, memory, desktop environment, themes, icons, and much more.

### Configuration

Fastfetch is highly customizable through its configuration files. By default, it looks for configuration files in the following order (and uses the first one it finds):

1.  `$XDG_CONFIG_HOME/fastfetch/config.jsonc` (Recommended)
2.  `~/.config/fastfetch/config.jsonc`
3.  `$XDG_CONFIG_HOME/fastfetch/config.conf`
4.  `~/.config/fastfetch/config.conf`
5.  `/etc/fastfetch/config.jsonc`
6.  `/etc/fastfetch/config.conf`

**Configuration Format:**

* The primary and recommended format is **JSONC** (JSON with Comments). This allows for structured configuration with the added benefit of including comments to explain settings.
* A simpler key-value `.conf` format is also supported.

**Key Configuration Aspects:**

* **Modules:** You can specify which information modules to display (e.g., OS, Host, Kernel, Uptime, CPU, GPU, Memory) and in what order. You can also customize the format string for each module's output.
* **Logo:** Choose which ASCII art logo to display, or disable it entirely. You can even provide a path to a custom image or ASCII file.
* **Presets:** Fastfetch comes with several built-in presets that define a specific look and feel. You can load a preset or create your own custom configuration.
* **Formatting & Colors:** Customize the colors, alignment, and structure of the output.

Getting Started:Run fastfetch --help to see available command-line options.Run fastfetch --list-modules to see all available information modules.Run fastfetch --list-presets to see available configuration presets.Run fastfetch --gen-config to generate a default configuration file (it