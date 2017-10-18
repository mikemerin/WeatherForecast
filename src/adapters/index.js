const URL = "http://api.aerisapi.com/forecasts/11101?client_id=8XdPaXwzYWIbDTrF8iCL3&client_secret=ncTOr4kcLcjhRKVOeGRW2tecqJPTWRkCHLqErUli"


export class ForecastAdapter {

  static all() {
    return fetch(URL)
      .then( res => res.json() )
  }
}
