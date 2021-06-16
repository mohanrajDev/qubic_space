export const DBConfig = {
    name: 'qubix_space',
    version: 1,
    objectStoresMeta: [
      {
        store: 'hardwares',
        storeConfig: { keyPath: 'id', autoIncrement: true },
        storeSchema: [
          { name: 'name', keypath: 'name', options: { unique: false } },
          { name: 'label', keypath: 'label', options: { unique: false } },
          { name: 'window_type', keypath: 'window_type', options: { unique: false } },
          { name: 'sliding_window', keypath: 'sliding_window', options: { unique: false } },
          { name: 'casement_window', keypath: 'casement_window', options: { unique: false } },
          { name: 'fixed_window', keypath: 'fixed_window', options: { unique: false } },
          { name: 'ventilation_window', keypath: 'ventilation_window', options: { unique: false } },
          { name: 'glass_mess', keypath: 'glass_mess', options: { unique: false } },
          { name: 'hardware_price', keypath: 'hardware_price', options: { unique: false } },
          { name: 'status', keypath: 'status', options: { unique: false } },
        ]
      },
      {
        store: 'clients',
        storeConfig: { keyPath: 'id', autoIncrement: true },
        storeSchema: [
          { name: 'name', keypath: 'name', options: { unique: false } },
          { name: 'email', keypath: 'email', options: { unique: false } },
          { name: 'phone', keypath: 'phone', options: { unique: false } },
          { name: 'address', keypath: 'address', options: { unique: false } },
          { name: 'created_at', keypath: 'created_at', options: { unique: false } },
        ]
      },
      {
        store: 'quotations',
        storeConfig: { keyPath: 'id', autoIncrement: true },
        storeSchema: [
          { name: 'client', keypath: 'client', options: { unique: false } },
          { name: 'hardware', keypath: 'hardware', options: { unique: false } },
          { name: 'glass', keypath: 'glass', options: { unique: false } },
          { name: 'mess', keypath: 'mess', options: { unique: false } },
          { name: 'track_2', keypath: 'track_2', options: { unique: false } },
          { name: 'track_2_5', keypath: 'track_2_5', options: { unique: false } },
          { name: 'track_3', keypath: 'track_3', options: { unique: false } },
          { name: 'casement', keypath: 'casement', options: { unique: false } },
          { name: 'fixed', keypath: 'fixed', options: { unique: false } },
          { name: 'ventilation', keypath: 'ventilation', options: { unique: false } },
        ]
      }
    ]
  };