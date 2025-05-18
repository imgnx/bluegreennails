package main

import (
	"github.com/wailsapp/wails/v2"
	"github.com/wailsapp/wails/v2/pkg/options"
)

func main() {
	app := NewApp()
	wails.Run(&options.App{
		Title:  "nails-webpack",
		Width:  1024,
		Height: 768,
		Bind: []interface{}{
			app,
		},
	})
}
