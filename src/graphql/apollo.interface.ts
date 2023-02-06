/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getBasicInfoQuery
// ====================================================

export interface getBasicInfoQuery_getBasicInfoList {
  __typename: "GetBasicInfoListReturnDto";
  bsc_business_number: string | null;
  bsc_ceo_name: string | null;
  bsc_corp_address: string | null;
  bsc_cs_close_time: string | null;
  bsc_cs_number: string | null;
  bsc_cs_open_day: string | null;
  bsc_cs_open_time: string | null;
  bsc_idx: number | null;
  /**
   * 통신판매업신고번호
   */
  bsc_mail_order_approval: string | null;
}

export interface getBasicInfoQuery {
  /**
   * 도메인 관련 정보를 조회합니다.
   */
  getBasicInfoList: getBasicInfoQuery_getBasicInfoList[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
