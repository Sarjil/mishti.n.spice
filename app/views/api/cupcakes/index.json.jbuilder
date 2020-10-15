@cupcakes.each do |cupcake|
    json.set! cupcake.id do
        json.extract! cupcake, :name, :description, :price
            json.id cupcake.id
            json.name cupcake.name
            json.description cupcake.description
            json.price cupcake.price
    end
end