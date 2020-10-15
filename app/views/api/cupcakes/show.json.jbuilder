json.cupcake do
    json.extract! @cupcake, :name, :description, :price
    json.name @cupcake.name
    json.description @cupcake.description
    json.price @cupcake.price
end