﻿public class CartItem
{
    public int Id { get; set; }
    public string ProductName { get; set; }
    public string ImageUrl { get; set; }
    public string Color { get; set; }
    public string Size { get; set; }
    public decimal Price { get; set; }
    public int Quantity { get; set; }
    public decimal TotalPrice => Price * Quantity;
}

