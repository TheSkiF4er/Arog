package main

import (
	"fmt"
	"os"
)

func main() {
	fmt.Println("Farog CLI 1.0.0 — заглушка для релизного архива.")
	if len(os.Args) > 1 {
		fmt.Printf("Получена команда: %v\n", os.Args[1:])
	}
	// Здесь будет реализация команд farog init/run/dev/build/pm и др.
}
