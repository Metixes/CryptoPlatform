import { useEffect, useState } from "react";
import { notification, message } from "antd";
import { useTranslation } from "react-i18next";
import { ethers } from "ethers";

import metamaskImg from "../../assets/icons/metamask.svg";

export default function metaMask({ styles }) {
  let provider
  const { t } = useTranslation();
  const [userAccountWallet, setUserAccountWallet] = useState('');
  const [userBalanceWallet, setUserBalanceWallet] = useState('');
  const [api, contextHolder] = notification.useNotification();
  const [messageApi, contextHolder1] = message.useMessage();

  useEffect(() => {
    if(window.ethereum){
      window.ethereum.on('accountsChanger', userChangedAccount)
      window.ethereum.on('chainChanged', chainChangedHandler);
      return() => {
        window.ethereum.removeListener('accountsChanger', () => {})
        window.ethereum.removeListener('chainChanged', () => {})
      }
    }
  }, [])

  const isInstalledMetamask = () => {
    const btn = (
      <div>
        <a type="link" size="small" onClick={() => api.destroy()}>
          {t("notification.No")}
        </a>
        <a
          href="https://metamask.io/download/"
          target="blank"
          type="primary"
          size="small"
          onClick={() => api.destroy()}>
          {t("notification.Yes")}
        </a>
      </div>
    );
    api.info({
      duration: 20,
      message: t("notification.title"),
      description: t("notification.description"),
      icon: <img src={metamaskImg} alt="metamask" />,
      btn,
    });
  };
  const connectSuccess = () => {
    messageApi
      .open({
        type: "loading",
        content: t('connectSuccess.content'),
        duration: 2,
      })
      .then(() => message.success(t('connectSuccess.done'), 2.5));
  };

  const connectWarning = () => {
    messageApi.open({
      type: "warning",
      duration: 3,
      content: t('connectWarning.content'),
    });
  };

  const connectInfo = () => {
    messageApi.open({
      type: "info",
      duration: 3,
      content: t('connectInfo.content'),
    });
  };

  const connectMetamask = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        if (userAccountWallet.length > 0) {
          connectInfo();
        }else{
          const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
          });
          provider = new ethers.BrowserProvider(window.ethereum)
          userChangedAccount(accounts[0]);
          connectSuccess();
        }
      } catch {
        connectWarning();
      }
    } else {
      isInstalledMetamask();
    }
  };

  const userChangedAccount = (newAccount) => {
    setUserAccountWallet(newAccount)
    getUserBalance(newAccount)
  }

  const getUserBalance = async (address) => {
    if (typeof window.ethereum !== 'undefined' && address.length > 0) {
      try {
        const userBalance = await provider.getBalance(address)
        setUserBalanceWallet(userBalance)
      } catch {
        warning();
      }
    } else{
      console.error('error')
    }
  }

  const chainChangedHandler = () => {
		window.location.reload();
	}

  return (
    <>
      {contextHolder}
      {contextHolder1}
      <span className={styles} onClick={connectMetamask}>
        {t("buttons.Connect")}
      </span>
    </>
  );
}
