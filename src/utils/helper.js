

export function filterData(searchText, Restaurants) {
      //Tolowercase is used to filter the restaurants even the user writes in capital or lower case.
      return Restaurants.filter((res) => res.data.name.toLowerCase().includes(searchText.toLowerCase()));
}