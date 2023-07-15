export default {
  port: 8070,
  dbUri: process.env.MONGO_DB_URL,
  saltWorkFactor: 10,
  accessTokenTtl: "1h",
  refreshTokenTtl: "1y",
  accessTokenPrivateKey: `LS0tLS1CRUdJTiBSU0EgUFJJVkFURSBLRVktLS0tLQpNSUlFb2dJQkFBS0NBUUIwUlkvVjU2RTFqNFVsbHdMK0VYcUNncG53b0M4NWJWSHN4TE9TZ1JQckowZnczVGF3CndaTmJvbEQvdWxENkNTM2huU0JsQTdOVDRsTG9ySmFYMDdHOWlqb0Y3QVoxN3Yyc3F0TjROcVhZQ2RKQVBDczIKYlhpMERSVGNNK2pWVHZybXl1RUgyekZMNzlHdWNiODd6U0wzTDhxY0h2K3lpc2tObm1nVnpTY2JiaEdLc3hKeQpSeFdaSkxpeW84SUVOd08rM3JjVVVxam4yZGw4MTF4ZmI4R0hjMmg3Q1pGWDd3SWlqbzA1a0R1M2wybjI5RUFqCnk1azlmcXJlOVIwNDlhUk13dnpJUDBLSVVzeEJNRU1ZQVNaQ1pZR0ZXeTN6Y2JzRWpiVEhzNm1rUlFlNDBJTFUKbXRhR3JUbjU1SzRmbUdtMFNwZlBkMWwyaE02TWM2cHNpbFd6QWdNQkFBRUNnZ0VBRXJZN0xxNkhTQ3Bmd0N2cwpaRjBGdlVrdFl3YzBjbWFBZjcwc05SQ20xdnBNWHB3TE9Dai9BUWsvUmRpRFBhb0tnenVaUWdoMWJMT0lxajlVClFQemxwdDQrOWtNRXl5ZjZGVGFzcjdVRHZaL2ZBVTF0bXVYRlBoeTQxYk5ZN2pNMnQ3dkF1Vlh5T2dsUFVtYWwKNHdiaGNLeDFTK2pGTjhPVUZhZi9ranFnNTQzMzU0OUZSaDlEeWloa0FDaEh5Y1FTNWtRR0F0d3NuYWVMMGtucwoyNWIzeDJnY0cvMnZUdGkxdkFTWm11TDJpNXVSclg1emw3QkNIcWwvYzN2eVVqWU5Tdnp5YVdpMVRNR3ZxZ2lKClZ1ZDkzODk2bkZ1OWFsL016WTkya2hDRjF1Q01QQ01LMUwzVmZWTTdkTnpQRFEwZGZpVUI3TGppL1lqMW5GeFEKdS9WaWFRS0JnUURMUGFnd1RZR0lJSHRNMGkyM3BPL0I5ZnovSlFFTXVHVThVRHRJNHIvcm0rd0pObnJETzJvVwpnVlp0MmgvY3BES3pPWWxlemJZUHVmcit4azB6dHpSZ2c0aExnejB0djlXTWIwRm9GRERHQlBWWWh2VEVNNEE5Clk5eklyNFQzc05kWlVRSngyc245SlExdUpVcE9KcFY1cG9DZEFYdlp5RTZ1SnJrSlF6bDhKd0tCZ1FDU2RHSTQKRzByYnR3bUpMemZJaTJpanR4ZU1PU2FRVWdQdUxNa2xiNkh4WXg4RFVtWG1Kd0VoeWJLRFBkVVJFekpMRnpqTgo2ajd6UzF1RjZwb0llWGdTVVhDTEFmMUlSeGdNUDRxNUpQTWpwaVBwSE8wVTBYWnpPdnZTeWpldG51Y2pIVWhBCi9lQ2UyMkYrbC8wWHF6MHRrKzRMOG9xRXBXYmNudy9mSHpjMWxRS0JnUUNMMk00dEJuZlYyanZkWFZZVjRra1QKbHBiU1hYeithcmRHTEJMUEVTOXNDS3IrbjkwVEQ0UHRIbXdCUkxEZDJxSUVUdGZtUXZnK2xBTlFZZFRuZSsxdgpaN0pWKzJVU1lNaXBURGllVEI1UGMwUDYrVW5jNDI4ZlR1S3h1SXh1L3VEL1ZVMndXQkxhdkM4a2xrWXR4a0RlCkp5S2laazM1U2VwUnpOVlB1VkVKeXdLQmdDZElsb3ZzTGpFdk1KeWVrTHozUC9NaUNtdnZiSHVydENndjFTaDQKZ0J6S2RLZ2tjdmJBSVpxWmlvdVBpMVpRS3Q1ZmRUb3VpZ0lpaFlNdlFXL2lmU1dVdUxaZ3F6cTI3eWxoNWVqeAprMUpObnpaSkx3SzFpS3N4K0JnN2E2SGpqS1lybFpUeFJFMzRGSGVyZHhUaE5zREIvRWt5SHB1ajdpcGhkQlZxClB4bmRBb0dBZTR4bnhyUUFWSTFYYjAwTXk3bmtUL0tUMnpVUFBZMk1lYmU4VXNXNEhsK2VMVlBLc3hPZkw5V2YKUi9sRHhoRm5vb3lTeXB2YmZ1d3FqYzA4QmVWY3FTRU1UVElBVFFHaTBmTXFwTTltc1M1dkM2TDZSUjJZdm95YwpiNmlvTG0zYytxRDZSZmx1S2V2cmc2b0ViYm50d3B4cTU2U0IxMDM1eXZIS2RpTzVyNlE9Ci0tLS0tRU5EIFJTQSBQUklWQVRFIEtFWS0tLS0t`,
  accessTokenPublicKey: `LS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS0KTUlJQklUQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FRNEFNSUlCQ1FLQ0FRQjBSWS9WNTZFMWo0VWxsd0wrRVhxQwpncG53b0M4NWJWSHN4TE9TZ1JQckowZnczVGF3d1pOYm9sRC91bEQ2Q1MzaG5TQmxBN05UNGxMb3JKYVgwN0c5Cmlqb0Y3QVoxN3Yyc3F0TjROcVhZQ2RKQVBDczJiWGkwRFJUY00ralZUdnJteXVFSDJ6Rkw3OUd1Y2I4N3pTTDMKTDhxY0h2K3lpc2tObm1nVnpTY2JiaEdLc3hKeVJ4V1pKTGl5bzhJRU53TyszcmNVVXFqbjJkbDgxMXhmYjhHSApjMmg3Q1pGWDd3SWlqbzA1a0R1M2wybjI5RUFqeTVrOWZxcmU5UjA0OWFSTXd2eklQMEtJVXN4Qk1FTVlBU1pDClpZR0ZXeTN6Y2JzRWpiVEhzNm1rUlFlNDBJTFVtdGFHclRuNTVLNGZtR20wU3BmUGQxbDJoTTZNYzZwc2lsV3oKQWdNQkFBRT0KLS0tLS1FTkQgUFVCTElDIEtFWS0tLS0t`,
  refreshTokenPrivateKey: `LS0tLS1CRUdJTiBSU0EgUFJJVkFURSBLRVktLS0tLQpNSUlFb3dJQkFBS0NBUUVBMjNaTDVqQXBHbzA0c3QzNkZRWFBpT3d4ZC9JTmNWdDc0dml0b2VaVHVvWEZ1TG1rClNPa1hJbnVxMTU4ajJEdlVxYmU2VVg5aUFhMDcyLzFpdG50ZlY5OXR1NC9aeGJyRnZGMThxWDJ5OTJJY0dqdDgKT2NZWDRFc1pXTlBFNGhGejY4T0JtdTNFYllON0RERnhlNkZqWExtdnl1bzg4MGhNVEoxWS9NK3Q3UmloSGRmNgpxV2lqOG00ZzEzY1F1ckFWM2NWRklDOXdGMTRiK3BPc3h1c0dVYXhFZVpFRGZGeENoOHVib0h6MFdJUGVLTXFaCjE1NUhEL3pGWkZtbEx3OUtZeE0vOTMreExLL0U2RzBaYUwwK0w0YSs5dnNQdktDSzZ0TmYybFdHTEVORmZuYlkKNDlobzd2UW43MXNERXh4NWxLcG5tSnNHNDRSdU5DZEF3cDFIUFFJREFRQUJBb0lCQURuczVXZWllcGJwZzNlaQpvMmw5R1NRWXc0M1hNN2toM25jd0VCUlZpUEFJY3dHbzdqWFlZQ1RYNDJYNk9TblAwUGZpNktpdUtKNHNyVW9KCmZVNlJEYjlSMTlMVHl6VW5jUjJneDFDdFB0bVE2YjM2eVhVdVZncjdoM3NzbWlEWlhuRnlMdmxIbkxzVEl4MDYKeDZ0TUU3L2J1d3loK3VoendyL09JRGpLVUN2dUFQdk94RXlmbWFzSkw2UjExbUJmL3Zxa0VEUlNsY1FYdjR5eQpwdkpRMnlkSGF3c0hZYVN6UWpnYzB5bXRlVnhkZnh4aWI5ZWJab1JuT25EeS83UzFiVUg1OTIyWmxRMVZ3MkhrCkFVRWI1Yk0wZXgyOEdXU09BUE5oVHAySkRCVmZBVERSQ1c3U2hMQWpUeGVyelNESTQyY0FsOGIycGtrNGhRWmkKbDhsNFpia0NnWUVBK2VVb0ZWNktDRnFmSERYNUlBZHlsS0U0cTF3WHo3UHpqVzk3Q0xTYld1L2tFVWJOblg2YQp2MHhBYmhCTG1KUElzWVNxZE44SFMvWnRZN0Q0cnRTL0xXSnNaSmw1Zm9BWE9SWDU0bSswS3FjNXQyUm1WRzFnCis1d1lySEVGaW1NMWZHK1FVWEVKUUM2UTRBSEd2ZkMxYStxdzZycXdYNHVnYnpFclMwM1FQU01DZ1lFQTROTFAKelRWRGtLSE02Qksrb1gyYUNreVRpem91Q0JBYVVkdjFDZSt1L0VZQ2lOSXRGZlJ5MDA2QVJFbW1RaU5ucnhXego3WWdudDVhQUdKNWZOTStCNWlLYzh6cjIyeXFsSlFmVFpOV2VSWmpuTkhpRUhDMC9pWnFsZW9LUXNUQ3hWd3ZaCk5MalBvOWZjRmNYdTQ4WjM3QU1DQUN4M0s1ZTVLYjBxa3dvUW9COENnWUFRV3FmcDVoc0FldlhJd2R1QTlodlEKa0ZDR0htdk1nd2xnYXpoUkZJaktSY0xXUXB6NFBxM2Y4UnlTVjJ5ckdwamF6VVRlaXk0T0VaMk5GYXJndmptWQp2Y1U4UERNUVRVKzN3N0ZyMlVXZ09QdDAvaFFZV0dRdGMwVEdIRXR4aUJhYkF5NGR0bGtWb3phR0FuZkFQSDJUCkIzUDJtS3NzUlpZRlVPRjFkeTAyb3dLQmdGb2xiVmtVOEdCLzRBOTE1S1lRSE1IZ2JwQzI1Vm9xU3NOajlON2wKRWo3cE8zN3M5MU1FVHo1WERhdFQ5S3cwVWhDc0hSY3pMdW00R09qR0o5cWZFYkRiVkI5YkZ6eE4zeVgzKzFWRgpLazh4dmhNVjk3THNtYnR0SE1rQXJVKysvSHl3cllrc1NXV2kyZ2FJOVA2eng4WUVkcnJuR1dtTFRwMWowanhmCkhzZDFBb0dCQU43aHFNTXdaZ3NnZTRXa3c3KzRDbFp0RlpZdnpSWmdpVGpOSExMSTB5VUJyRzArZWNqVWF5UWoKR0daY1QvUXRVT29CVnpycXp1WDd1SGJidldFNDl3R3JGenNRR25NaktSdWZvU2xReVdMVHJlQUNyTVpkVEgyawpWTlJGSjVoS0hJbFFEZnhiRXB5c3pDTm1yNFdzUjZ3SkdzdXhSazI2STFrMVU3MUl6WDRLCi0tLS0tRU5EIFJTQSBQUklWQVRFIEtFWS0tLS0t`,
  refreshTokenPublicKey: `LS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS0KTUlJQklqQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FROEFNSUlCQ2dLQ0FRRUEyM1pMNWpBcEdvMDRzdDM2RlFYUAppT3d4ZC9JTmNWdDc0dml0b2VaVHVvWEZ1TG1rU09rWEludXExNThqMkR2VXFiZTZVWDlpQWEwNzIvMWl0bnRmClY5OXR1NC9aeGJyRnZGMThxWDJ5OTJJY0dqdDhPY1lYNEVzWldOUEU0aEZ6NjhPQm11M0ViWU43RERGeGU2RmoKWExtdnl1bzg4MGhNVEoxWS9NK3Q3UmloSGRmNnFXaWo4bTRnMTNjUXVyQVYzY1ZGSUM5d0YxNGIrcE9zeHVzRwpVYXhFZVpFRGZGeENoOHVib0h6MFdJUGVLTXFaMTU1SEQvekZaRm1sTHc5S1l4TS85Myt4TEsvRTZHMFphTDArCkw0YSs5dnNQdktDSzZ0TmYybFdHTEVORmZuYlk0OWhvN3ZRbjcxc0RFeHg1bEtwbm1Kc0c0NFJ1TkNkQXdwMUgKUFFJREFRQUIKLS0tLS1FTkQgUFVCTElDIEtFWS0tLS0t`,
};
