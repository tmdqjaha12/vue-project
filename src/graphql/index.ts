// gql
import { gql } from "@apollo/client";

export const GET_BASICINFO_QUERY = gql`
  query getBasicInfoQuery {
    getBasicInfoList {
      bsc_business_number #: String
      bsc_ceo_name #: String
      bsc_corp_address #: String
      bsc_cs_close_time #: String
      bsc_cs_number #: String
      bsc_cs_open_day #: String
      bsc_cs_open_time #: String
      bsc_idx #: Int
      bsc_mail_order_approval #: String
    }
  }
`;
