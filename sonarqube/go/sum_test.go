package main

import "testing"

func testSum(t *testing.T){
	if sum(10,10) != 20 {
		t.Errorf("sum failed expect 20")
	}
}