if status is-interactive
    # Commands to run in interactive sessions can go here
    set -g -x fish_greeting (set_color brgreen)"check "(set_color brcyan)"your "(set_color brred)"to-do "(set_color normal)"list!"
end
