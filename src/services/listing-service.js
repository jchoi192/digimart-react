const BASE_URL = 'http://localhost:3001/api/listings'

function fetchListing() {
    return fetch(BASE_URL).then(res => res.json());
}

function updateListing({ title, url, description, category, price, _id }) {
    fetch(`${BASE_URL}/${_id}`, {
          method: 'PUT',
          headers: {'Content-type': 'Application/json'},
          body: JSON.stringify({ title, url, description, category, price })
        }).then(res => res.json());
}

function createListing(data) {
    fetch(BASE_URL, {
          method: 'POST',
          headers: {'Content-type': 'Application/json'},
          body: JSON.stringify(data)
        })
        .then(res => res.json())
}

function deleteListing(id) {
    fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE'
      }).then(res => res.json());
}

export {
    fetchListing,
    updateListing,
    createListing,
    deleteListing
}