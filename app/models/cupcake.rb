class Cupcake < ApplicationRecord
    validates :name, :description, :price, presence: :true

end
