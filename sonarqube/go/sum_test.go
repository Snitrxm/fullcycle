package main

import "testing"

func testSum(t *testing.T){
	result := sum(10, 10)

	if result != 20 {
		t.Errorf("Expected 20, got %d", result)
	}
}