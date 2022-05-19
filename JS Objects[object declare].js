
        var n = prompt("Enter name of Car");
        var clr = prompt("Enter color of Car");
        var comp = prompt("Enter company name of Car");
        var price = prompt("Enter price of Car");
        var car = {
            'first name': n,
            color: clr,
            company: comp,
            price: price,
            discount: function() {
                var amount = car.price * (.90);
                return amount;
            }
        }
        document.write(car['first name'] + " <br> " + car.color + "<br> " + car.company + "<br> " + car.price + "<br> " + car.discount());